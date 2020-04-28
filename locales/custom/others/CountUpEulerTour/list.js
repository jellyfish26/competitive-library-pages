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
            "name": "binary_indexed_tree",
            "link": "datastrcture-BinaryIndexedTree"
          },
        ],
        func_reference: [
          {
            "function": "CountUpEulerTour$(graph, size)$",
            "explanation": "constructor_explanation",
            "amount": "$O(V)$",
            "constant_times": "same_times"
          },
          {
            "function": "init_pre_order_count$(i)$",
            "explanation": "init_pre_order_count_explanation",
            "amount": "$O(V\\log{V})$",
            "constant_times": "very_light"
          },
          {
            "function": "init_post_order_count$(i)$",
            "explanation": "init_post_order_count_explanation",
            "amount": "$O(V\\log{V})$",
            "constant_times": "very_light"
          },
          {
            "function": "reset_pre_order_count$(i)$",
            "explanation": "reset_pre_order_count_explanation",
            "amount": "$O(V\\log{V})$",
            "constant_times": "same_times"
          },
          {
            "function": "reset_post_order_count$(i)$",
            "explanation": "reset_post_order_count_explanation",
            "amount": "$O(V\\log{V})$",
            "constant_times": "same_times"
          },
          {
            "function": "reset_count$()$",
            "explanation": "reset_count_explanation",
            "amount": "$O(V)$",
            "constant_times": "very_light"
          },
          {
            "function": "update$(r, i)$",
            "explanation": "updatet_explanation",
            "amount": "$O(\\log{V})$",
            "constant_times": "very_light"
          },
          {
            "function": "query$(\{l, r\})$",
            "explanation": "query_pair_explanation",
            "amount": "$O(\\log{V})$",
            "constant_times": "very_light"
          },
          {
            "function": "query$(r)$",
            "explanation": "query_explanation",
            "amount": "$O(\\log{V})$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }