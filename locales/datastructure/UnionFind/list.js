export default {
    data () {
      return {
        func_reference: [
          {
            "function": "UnionFind$(size)$",
            "explanation": "constructor_explanation",
            "amount": "$O(N)$",
            "constant_times": "very_light"
          },
          {
            "function": "same$(x, y)$",
            "explanation": "same_explanation",
            "amount": "$O(a(N))$",
            "constant_times": "2times"
          },
          {
            "function": "unite$(x, y)$",
            "explanation": "unite_explanation",
            "amount": "$O(1)$",
            "constant_times": "unite_constant_times"
          },
          {
            "function": "find$(i)$",
            "explanation": "find_explanation",
            "amount": "$O(a(N))$",
            "constant_times": "very_light"
          },
          {
            "function": "size$(i)$",
            "explanation": "size_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }