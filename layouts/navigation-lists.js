import datastrcture from './classification_list/datastrcture.js'
import graph from './classification_list/graph.js'
import algorithm from './classification_list/algorithm.js'
import mathematics from './classification_list/mathematics.js'
import geometry from './classification_list/geometry.js'
import extension_graph from './classification_list/custom/extension_graph.js'
import extension_algorithm from './classification_list/custom/extension_algorithm.js'
import custom_others from './classification_list/custom/others.js'
import custom_garbage from './classification_list/custom/garbage.js'

export default {
  data() {
    return {
      navigation_list: [
        {
          icon: 'mdi-home',
          name: 'welcome',
          to: 'index',
        },
        {
          icon: 'mdi-group',
          name: 'data_strcture',
          to: '/datastrcture',
          open: false,
          list: datastrcture.data().list
        },
        {
          icon: 'mdi-graph',
          name: 'graph',
          to: '/graph',
          open: false,
          list: graph.data().list
        },
        {
          icon: 'mdi-equalizer',
          name: 'algorithm',
          open: false,
          list: algorithm.data().list
        },
        {
          icon: 'mdi-math-integral-box',
          name: 'math',
          to: '/mathematics',
          open: false,
          list: mathematics.data().list
        },
        {
          icon: 'mdi-matrix',
          name: 'geometry',
          to: '/geometry',
          open: false,
          list: geometry.data().list
        },
        {
          icon: 'mdi-graphql',
          name: 'extension_graph',
          to: '/custom',
          open: false,
          list: extension_graph.data().list
        },
        {
          icon: 'mdi-cube-unfolded',
          name: 'extension_algorithm',
          to: '/custom',
          open: false,
          list: extension_algorithm.data().list
        },
        {
          icon: 'mdi-flask-empty-plus',
          name: 'custom',
          to: '/custom',
          open: false,
          list: custom_others.data().list
        },
        {
          icon: 'mdi-delete',
          name: 'garbage',
          to: '/garbage',
          open: false,
          list: custom_garbage.data().list
        }
      ]
    }
  }
}