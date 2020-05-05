export default {
    data () {
      return {
        reference_about: "reference_about",
        func_reference: [
          {
            "function": "SegmentTree$(s, f, m)$",
            "explanation": "constructor_normal_explanation",
            "amount": "$O(N)$",
            "constant_times": "very_light"
          },
          {
            "function": "SegmentTree$(v, f, m)$",
            "explanation": "constructor_vector_explanation",
            "amount": "$O(N)$",
            "constant_times": "light"
          },
          {
            "function": "update$(i, v)$",
            "explanation": "update_explanation",
            "amount": "$O(\\log N)$",
            "constant_times": "light"
          },
          {
            "function": "query$(l, r)$",
            "explanation": "query_explanation",
            "amount": "$O(\\log N)$",
            "constant_times": "light"
          },
          {
            "function": "operator$[i]$",
            "explanation": "operator_reference_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          }
        ]
      }
    }
  }