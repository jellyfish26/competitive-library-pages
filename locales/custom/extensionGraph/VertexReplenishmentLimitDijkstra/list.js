export default {
    data () {
      return {
        reference_about: "reference_about",
        func_reference: [
          {
            "function": "VertexReplenishmentLimitDijkstra$(g, l, d)$",
            "explanation": "constructor_explanation",
            "amount": "$O(V)$",
            "constant_times": "light"
          },
          {
            "function": "add_edge$(s, t, l, c)$",
            "explanation": "add_edge_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "add_replenishment$(v, l, c)$",
            "explanation": "add_replenishment_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "query_overwrite$(s, e, sl, INF)$",
            "explanation": "query_overwrite_explanation",
            "amount": "$O((V + E)(VA_{max})(\\log V + \\log (A_{max}))$",
            "constant_times": "light"
          },
          {
            "function": "query$(s, e, sl, INF)$",
            "explanation": "query_explanation",
            "amount": "$O((V + E)(VA_{max})(\\log V + \\log (A_{max}))$ or $O(1)$",
            "constant_times": "light"
          },
        ]
      }
    }
  }