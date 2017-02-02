<template>
	<h1>{{title}}</h1>
</template>

<script type="text/javascript">
export default {
    computed: {
        title () {
            switch (this.$route.path) {
            case '/home': return 'Home Page'
            case '/student': return 'Student Page'
            case '/major': return 'Major Page'
            case '/class': return 'Class Page'
            case '/grade': return 'Grade Page'
            case '/graduation': return 'Graduation Page'
            case '/poverty': return 'Poverty Page'
            case '/system': return 'System Page'
            default: return 'I\'m the Header'
            }
        }
    }
}
</script>