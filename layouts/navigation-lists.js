import datastrcture from './classification_list/datastrcture.js'
import graph from './classification_list/graph.js'
import algorithm from './classification_list/algorithm.js'
import mathematics from './classification_list/mathematics.js'
import geometry from './classification_list/geometry.js'

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
        }
      ]
    }
  }
}