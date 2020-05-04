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
            },
            {
              name: 'rerooting',
              to: 'graph-ReRooting'
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
            {
              name: 'combination',
              to: 'mathematics-Combination'
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
              to: 'custom-extensionGraph-VertexReplenishmentLimitDijkstra'
            },
            {
              name: 'longest_increasing_subsequence_tree',
              to: 'custom-extensionGraph-LongestIncreasingSubsequenceTree'
            },
          ]
        },
        {
          icon: 'mdi-cube-unfolded',
          name: 'extension_algorithm',
          to: '/custom',
          open: false,
          list: [
            {
              name: 'undoable_longest_increasing_subsequence',
              to: 'custom-extensionAlgorithm-UndoableLongestIncreasingSubsequence'
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
              to: 'custom-others-CountUpEulerTour'
            },
            {
              name: 'counting_character_interval_mumeric_multiples',
              to: 'custom-others-CountingCharacterIntervalNumericMultiples'
            },
          ]
        },
        {
          icon: 'mdi-delete',
          name: 'garbage',
          to: '/garbage',
          open: false,
          list: [
            {
              name: 'specified_square_filled_count',
              to: 'custom-garbage-SpecifiedSquareFilledCount'
            },
          ]
        }
      ]
    }
  }
}