export default {
    data () {
      return {
        reference_about: "reference_about",
        dependent_libraries: [
          {
            "name": "graph_template",
            "link": "graph-template"
          },
          {
            "name": "euler_tour",
            "link": "graph-EulerTour"
          },
          {
            "name": "undoable_longest_increaseing_subsequence",
            "link": "custom-extensionAlgorithm-UndoableLongestIncreaseingSubsequence"
          },
        ],
        func_reference: [
          {
            "function": "LongestIncreaseingSubsequenceTree$(s, i)$",
            "explanation": "constructor_explanation",
            "amount": "$O(V)$",
            "constant_times": "very_light"
          },
          {
            "function": "add_edge$(s, t)$",
            "explanation": "add_edge_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "init_vertex$(s, n)$",
            "explanation": "init_vertex_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "build$(v)$",
            "explanation": "build_explanation",
            "amount": "$O(V\\log V)$",
            "constant_times": "very_light"
          },
          {
            "function": "operator$[v]$",
            "explanation": "operator_reference_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }