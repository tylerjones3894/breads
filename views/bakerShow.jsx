const React = require('express')
const Default = require('./layouts/Default')

function Show ({baker}) {
    return (
        <default>
            <h3>{baker.name}</h3>
            <p>{baker.name} has been baking with us since </p>
        </default>
    )
}