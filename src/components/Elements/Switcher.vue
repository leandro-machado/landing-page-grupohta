<template>
    
</template>

<script>
export default {
    name: 'Switcher',
        props: {
    },
    methods: {
        setTheme (theme) {
            return jQuery('#settingOption').attr('href','./css/colors/'+theme+'.css');
        }
    }
}
</script>

<style>

</style>
