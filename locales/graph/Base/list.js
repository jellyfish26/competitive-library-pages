export default {
    data () {
      return {
        reference_about: "reference_about",
        func_reference: [
          {
            "function": "UnWeightedGraph$(size, i)$",
            "explanation": "unweight_constructor_explanation",
            "amount": "$O(N)$",
            "constant_times": "very_light"
          },
          {
            "function": "add_edge$(s, t)$",
            "explanation": "unweight_add_edge_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "WeightedGraph$(size, i)$",
            "explanation": "weight_constructor_explanation",
            "amount": "$O(N)$",
            "constant_times": "very_light"
          },
          {
            "function": "add_edge$(s, t, c)$",
            "explanation": "weight_add_edge_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }