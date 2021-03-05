export default {
    data () {
      return {
        reference_about: "reference_about",
        func_reference: [
          {
            "function": "SegmentTree$(s, f, m)$",
            "explanation": "constructor_normal_explanation",
            "amount": "$O(N)$",
          },
          {
            "function": "SegmentTree$(v, f, m)$",
            "explanation": "constructor_vector_explanation",
            "amount": "$O(N)$",
          },
          {
            "function": "update$(i, v)$",
            "explanation": "update_explanation",
            "amount": "$O(\\log N)$",
          },
          {
            "function": "query$(l, r)$",
            "explanation": "query_explanation",
            "amount": "$O(\\log N)$",
          },
          {
            "function": "operator$[i]$",
            "explanation": "operator_reference_explanation",
            "amount": "$O(1)$",
          }
        ]
      }
    }
  }