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
          list: [
            {
              name: 'binary_indexed_tree',
              to: 'datastrcture-BinaryIndexedTree'
            },
            {
              name: 'union_find',
              to: 'datastrcture-UnionFind'
            }
          ]
        },
        {
          icon: 'mdi-graph',
          name: 'graph',
          to: '/graph',
          open: false,
          list: [
            {
              name: 'graph_template',
              to: 'graph-template'
            },
            {
              name: 'dijkstra',
              to: 'graph-Dijkstra'
            },
            {
              name: 'euler_tour',
              to: 'graph-EulerTour'
            }
          ]
        },
        {
          icon: 'mdi-equalizer',
          name: 'algorithm',
          open: false,
          list: [
            {
              name: 'cumulative_sum',
              to: 'algorithm-CumulativeSum'
            }
          ]
        },
        {
          icon: 'mdi-math-integral-box',
          name: 'math',
          to: '/mathematics',
          open: false,
          list: [
            {
              name: 'mod_int',
              to: 'mathematics-ModInt'
            },
          ]
        },
        {
          icon: 'mdi-matrix',
          name: 'geometry',
          to: '/geometry',
          open: false,
          list: [
            {
              name: 'geometry_point',
              to: 'geometry-Point'
            },
          ]
        },
        {
          icon: 'mdi-graphql',
          name: 'extension_graph',
          to: '/custom',
          open: false,
          list: [
            {
              name: 'vertex_replenishment_limit_dijkstra',
              to: 'extensionGraph-VertexReplenishmentLimitDijkstra'
            },
          ]
        },
        {
          icon: 'mdi-flask-empty-plus',
          name: 'custom',
          to: '/custom',
          open: false,
          list: [
            {
              name: 'enumerative_euler_tour',
              to: 'custom-CountUpEulerTour'
            },
            {
              name: 'counting_character_interval_mumeric_multiples',
              to: 'custom-CountingCharacterIntervalNumericMultiples'
            },
          ]
        }
      ]
    }
  }
}