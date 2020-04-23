export default {
    data () {
        return {
            navigation_list: [
                {
                    icon: 'mdi-home',
                    name: 'Welcome',
                    to: '/',
                },
                {
                    icon: 'mdi-group',
                    name: 'DataStrcture',
                    to: '/datastrcture',
                    open: false,
                    list: [
                        {
                            name: 'BinaryIndexedTree',
                            to: '/datastrcture/BIT'
                        },
                        {
                            name: 'UnionFind',
                            to: '/datastrcture/UnionFind'
                        }
                    ]
                },
                {
                    icon: 'mdi-graph',
                    name: 'Graph',
                    to: '/graph',
                    open: false,
                    list: [
                        {
                            name: 'graph_template',
                            to: '/graph/template'
                        },
                        {
                            name: 'Dijkstra',
                            to: '/graph/Dijkstra'
                        },
                        {
                            name: 'EulerTour',
                            to: '/graph/EulerTour'
                        }
                    ]
                },
                {
                    icon: 'mdi-math-integral-box',
                    name: 'Math',
                    to: '/mathematics',
                    open: false,
                    list: [
                        {
                            name: 'ModInt',
                            to: '/mathematics/ModInt'
                        },
                    ]
                },
                {
                    icon: 'mdi-matrix',
                    name: 'Geometry',
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
                    name: 'Custom',
                    to: '/custom',
                    open: false,
                    list: [
                        {
                            name: 'Enumerative_EulerTour',
                            to: '/custom/EnumerativeEulerTour'
                        },
                    ]
                }
            ]
        }
    }
}