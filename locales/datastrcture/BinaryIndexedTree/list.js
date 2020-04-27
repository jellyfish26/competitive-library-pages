export default {
    data () {
      return {
        reference_about: "reference_about",
        func_reference: [
          {
            "function": "BinaryIndexedTree$(size)$",
            "explanation": "constructor_explanation",
            "amount": "$O(N)$",
            "constant_times": "very_light"
          },
          {
            "function": "update$(i, x)$",
            "explanation": "update_explanation",
            "amount": "$O(\\log{N})$",
            "constant_times": "very_light"
          },
          {
            "function": "sum$(i)$",
            "explanation": "sum_explanation",
            "amount": "$O(\\log{N})$",
            "constant_times": "very_light"
          },
          {
            "function": "sum_all$()$",
            "explanation": "sum_all_explanation",
            "amount": "$O(\\log{N})$",
            "constant_times": "very_light"
          },
          {
            "function": "query$(l, r)$",
            "explanation": "query_explanation",
            "amount": "$O(\\log{N})$",
            "constant_times": "2times"
          },
        ]
      }
    }
  }