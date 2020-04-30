export default {
    data () {
      return {
        reference_about: "reference_about",
        func_reference: [
          {
            "function": "dfs_normal$(v)$",
            "explanation": "dfs_normal_explanation",
            "amount": "$O(N)$",
            "constant_times": "light"
          },
          {
            "function": "dfs_after$(v, b, p)$",
            "explanation": "dfs_after_explanation",
            "amount": "$O(N)$",
            "constant_times": "little_heavy"
          },
          {
            "function": "ReRooting$(N, mf, rf, i)$",
            "explanation": "constructor_explanation",
            "amount": "$O(N)$",
            "constant_times": "light"
          },
          {
            "function": "add_edge$(s, t, d)$",
            "explanation": "add_edge_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "build$()$",
            "explanation": "build_explanation",
            "amount": "$O(N)$",
            "constant_times": "little_heavy"
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