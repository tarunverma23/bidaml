<template>
  <div>
    <app-tabs v-if="this.$route.path =='/form' || this.$route.path =='/Data' || this.$route.path =='/Process'
    || this.$route.path =='/Technique' || this.$route.path =='/Deployment'">
    </app-tabs>
    <router-view @generate_task="generatecircle"></router-view>
    <brainstorming_form v-show="display_questions1()" 
    @generateGraph="generateFromForm" :save_hexagon= "save_hexagon" :save_tasks= "save_tasks">
    </brainstorming_form>
    <technique_form v-show="display_questions2()" @generateGraph="generateFromForm"></technique_form>

    <!-- <Process_form @generate_problem="generate_icon_process"> </Process_form> -->
    
    <graphViz  @problem_to_save="savehexagon" @tasks_to_save="savetasks"
    v-if="this.$route.path =='/form' || this.$route.path =='/Data' || this.$route.path =='/Process'
    || this.$route.path =='/Technique' || this.$route.path =='/Deployment'"
              id="xb-arg-map"
              class="b-arg-map"
              :hypothesisId="chunkId"
              :nodes="nodes"
              :textNodes="textNodes"
              :savedDiagram="savedDiagram"
              @save="save"
              :width="width" :height="height"
              ref="graph"
    ></graphViz>
    <save-modal :display="saveDisplay"
                :svgData="svgData"
                :graphData="graphData"
                @close="closeSave"
    ></save-modal>

  </div>
</template>
<script>

  import graphViz from './graphViz.vue';
  import saveModal from './components/saveModal.vue';
  import brainstorming_form from './components/brainstorming_form';
  import technique_form from './components/technique_form';
  import uuid from 'uuid/v4';
  import Process from '@/components/Process'
//import technique_formVue from './components/technique_form.vue';

  export default {
    
    props: ['snippets', 'w', 'graphChunk', 'chunk'],

    data() {
      return {
        chunkId: null,
        width: 300,
        height: 500,
        id: 3,
        h: 0,
        nodes: [],
        textNodes: [],
        savedDiagram: '',
        saveDisplay: false,
        svgData: undefined,
        graphData: undefined,
        display_questions: true,
        save_hexagon: '',
        save_tasks: [ { tasks_list: ''}],
      };
      
    },
      
    watch: {
      w() {
        this.$log.info('graph - width changed', this.w);
        this.width = this.w;
      },
      
    },
    created() {
      this.$log.info('graph - created', this.w, this);
      this.chunkId = this.chunk ? this.chunk.id : undefined;
      this.parse();
    },
    mounted() {
      this.height = document.getElementById('xb-arg-map').clientHeight;
      this.width = document.getElementById('xb-arg-map').clientWidth;
      this.$log.info('graph - height changed', this.height);
    },
    methods: {
      savehexagon(payload)
      {
       //alert (payload);
       this.save_hexagon = payload;
      },

      savetasks(payload)
      {
       //alert (payload);
       this.save_tasks.push({tasks_list: payload});
      },

      // savetasks(payload)
      // {
      //  //alert (payload);
      //  this.save_tasks = payload;


      // },

      generatecircle (payload){
         this.$refs.graph.rootObservable.next(
          {
            type: 'CREATE',
            newNode: {text:payload, nodeShape: 'circle'},
            //triplet: edges,
            
          },
        );

      },

      generateFromForm(payload) {
        const nodes = payload.map((text, i ) => {
          const id = `note-${uuid()}`;
          //alert(text);
          if (i === 0){
            return {
            id,
            nodeShape: 'rect',
            text,
            hash: id,
          };
          // ["a", "b", "c"].map(console.log)
          }

          // if (text == "New1") {
          //   return {
          //   id,
          //   nodeShape: 'rect',
          //   text,
          //   hash: id,
          // };
          // }
          else {
            return {
            id,
            nodeShape: 'circle_orange',
            text,
            hash: id,
          };
          }
        });

         
        const reOrderedNodes = payload.length === 3 ? [nodes[1], nodes[0] ,nodes[2]] : nodes;
        
        const edges = reOrderedNodes
          .slice(1)
          .reduce((acc, cur, idx) => {
            const edge = {
              subject: reOrderedNodes[idx],
              predicate: {
                type: 'arrow',
                text: '',
                hash: `edge-${uuid()}`,
                subject: reOrderedNodes[idx].id,
                object: reOrderedNodes[idx + 1].id,
                class: '',
                arrowhead: 'N',
                stroke: '#000000',
                strokeWidth: 2,
                strokeDasharray: 0,
              },
              object: reOrderedNodes[idx + 1],
            };
            return acc.concat(edge);
          }, []);

        this.$refs.graph.rootObservable.next(
          {
            type: 'CREATE',
            newNode: nodes,
            triplet: edges,
          },
        );
      },

      generate_icon_process(){
        alert("it works");

      },

       display_questions1() {
        var currentUrl = window.location.pathname;
         if (currentUrl=="/form"){
          return true;
         }
        else{
        return false;
         }
        
      },

      display_questions2() {
        var currentUrl = window.location.pathname;
         if (currentUrl=="/Technique"){
          return true;
         }
        else{
        return false;
         }
        
      },

      parse() {
        let saved = null;
        let textNodes = [];
        let graph = this.graphChunk && this.graphChunk.content;

        if (graph && this.graphChunk.deleted) graph = null;
        else if (graph && !graph.deleted && graph.length > 0) {
          try {
            graph = JSON.parse(graph);
            saved = graph.saved;
            textNodes = graph.textNodes;
          } catch (e) {
            // pass
          }
        }
        this.savedDiagram = saved || '{"triplets":[{"subject":"0","predicate":"arrow","object":"1"}],"nodes":[{"hash":"0","x":223.3129297153952,"y":46.94835315445652},{"hash":"1","x":414.12654824652196,"y":106.86632193726514},{"hash":"2","x":393.53570556640625,"y":182.36602783203125}]}';
        this.nodes = this.snippets;

        if (!textNodes || textNodes.length === 0) {
          this.textNodes = this.nodes;
        } else {
          this.textNodes = textNodes;
        }
      },
      save(savedDiagram, svg, textNodes) {
        const graph = JSON.stringify({
          saved: savedDiagram,
          svg: svg.outerHTML,
          textNodes,
        });
        const payload = {
          graphChunk: this.graphChunk,
          chunk: this.chunk,
          id: this.chunkId,
          graph,
        };
        this.$log.info('graph - saved', payload, JSON.parse(savedDiagram));
        this.$emit('save', payload);

        this.saveDisplay = true;
        this.svgData = svg;
        this.graphData = JSON.stringify({
          saved: JSON.parse(savedDiagram),
          textNodes,
        });
      },
      closeSave() {
        this.saveDisplay = false;
        this.svgData = undefined;
        this.graphData = undefined;
      },

    },
    components: { graphViz, saveModal, brainstorming_form, technique_form },
  };

</script>

<style>
  .b-arg-map .fa {
    font-size: 16px !important;
  }

  text {
    font-family: "Source Sans Pro", sans-serif !important;
    font-weight: 100 !important;
  }

  .b-arg-map .graph-unorderedList li {
    vertical-align: middle !important;
    text-align: center !important;
    font-size: 16px !important;
    cursor: pointer;
  }

  .b-arg-map .graph-unorderedList li > span {
    font-size: 16px !important;
    padding: 5px !important;
  }

</style>

<style scoped>
  .b-arg-map {
    left: 0;
    top: 45%;
    /* top: 430px; */
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 1px solid #E5E5E5; 
  }


</style>
