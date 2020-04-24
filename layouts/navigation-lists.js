export default {
    data () {
        return {
            navigation_list: [
                {
                    icon: 'mdi-home',
                    name: 'welcome',
                    to: 'index',
                },
                {
                    icon: 'mdi-group',
                    name: 'data_strcture',
                    to: '/datastrcture',
                    open: false,
                    list: [
                        {
                            name: 'binary_indexed_tree',
                            to: 'datastrcture-BinaryIndexdedTree'
                        },
                        {
                            name: 'union_find',
                            to: '/datastrcture/UnionFind'
                        }
                    ]
                },
                {
                    icon: 'mdi-graph',
                    name: 'graph',
                    to: '/graph',
                    open: false,
                    list: [
                        {
                            name: 'graph_template',
                            to: '/graph/template'
                        },
                        {
                            name: 'dijkstra',
                            to: '/graph/Dijkstra'
                        },
                        {
                            name: 'euler_tour',
                            to: '/graph/EulerTour'
                        }
                    ]
                },
                {
                    icon: 'mdi-math-integral-box',
                    name: 'math',
                    to: '/mathematics',
                    open: false,
                    list: [
                        {
                            name: 'mod_int',
                            to: '/mathematics/ModInt'
                        },
                    ]
                },
                {
                    icon: 'mdi-matrix',
                    name: 'geometry',
                    to: '/geometry',
                    open: false,
                    list: [
                        {
                            name: 'geometry_point',
                            to: '/geometry/Point'
                        },
                    ]
                },
                {
                    icon: 'mdi-flask-empty-plus',
                    name: 'custom',
                    to: '/custom',
                    open: false,
                    list: [
                        {
                            name: 'enumerative_euler_tour',
                            to: '/custom/EnumerativeEulerTour'
                        },
                    ]
                }
            ]
        }
    }
}