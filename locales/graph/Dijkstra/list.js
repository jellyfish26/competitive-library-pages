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
            "function": "Dijkstra$(graph)$",
            "explanation": "constructor_explanation",
            "amount": "$O(V)$",
            "constant_times": "very_light"
          },
          {
            "function": "query_overwrite$(s, e, INF)$",
            "explanation": "query_overwrite_explanation",
            "amount": "$O(E\\log{V})$",
            "constant_times": "light"
          },
          {
            "function": "query$(s, e, INF)$",
            "explanation": "query_explanation",
            "amount": "$O(E\\log{V})$ or $O(1)$",
            "constant_times": "light"
          },
          {
            "function": "query$(s, INF)$",
            "explanation": "query_noreturn_explanation",
            "amount": "$O(E\\log{V})$ or $O(1)$",
            "constant_times": "light"
          },
          {
            "function": "operator[$s$]",
            "explanation": "operator_reference_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }