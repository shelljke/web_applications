Ext.application({
    name: 'wh',
    appFolder: 'wh',
    models: ['Product'],
    controllers: ['Products'],

    autoCreateViewport: true,
    init: function () {
        alert('init'); 
    },
    launch: function () {
        alert('launch');
    }
});