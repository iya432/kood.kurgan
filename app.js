// Инициализация VK Mini Apps SDK
vkBridge.send('VKWebAppInit');

// Опционально можно настроить дополнительные параметры, если необходимо
vkBridge.subscribe((event) => {
    switch (event.detail.type) {
        case 'VKWebAppUpdateConfig':
            const schemeAttribute = document.createAttribute('scheme');
            schemeAttribute.value = event.detail.data.scheme ? event.detail.data.scheme : 'client_light';
            document.body.attributes.setNamedItem(schemeAttribute);
            break;
        default:
            break;
    }
});
