const QRcode = (props) => {
    var React = require('react');
    var QRCode = require('qrcode.react');
return (
    <div>
         <QRCode value={props.type} size={175}/>
    </div>
);
}
export default QRcode;