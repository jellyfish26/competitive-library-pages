export default {
    data () {
      return {
        reference_about: "reference_about",
        dependent_libraries: [
          {
            "name": "graph_template",
            "link": "graph-template"
          },
        ],
        func_reference: [
          {
            "function": "EulerTour$(graph, size)$",
            "explanation": "constructor_explanation",
            "amount": "$O(V)$",
            "constant_times": "2times"
          },
          {
            "function": "build$(s)$",
            "explanation": "build_explanation",
            "amount": "$O(V + E)$",
            "constant_times": "very_light"
          },
          {
            "function": "index_of_vertex$(v)$",
            "explanation": "index_of_vertex_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "pre_order$(v)$",
            "explanation": "pre_order_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "post_order$(v)$",
            "explanation": "post_order_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "operator$[i]$",
            "explanation": "operator_reference_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "size()",
            "explanation": "size_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }