<button id="upload_widget" class="cloudinary-button">Upload files</button>

<script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>

<script type="text/javascript">
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dk4itfgu5',
    uploadPreset: 'ml_default'}, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
      }
    }
  )

  document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
</script>

<script type="text/javascript">
  var generateSignature = function(callback, params_to_sign){
    $.ajax({
     url     : “https://www.my-domain.com/my_generate_signature",
     type    : "GET",
     dataType: "text",
     data    : { data: params_to_sign},
     complete: function() {console.log("complete")},
     success : function(signature, textStatus, xhr) {       callback(signature); },
     error   : function(xhr, status, error) { console.log(xhr,       status, error); }
    });
  }
</script>

<script type="text/javascript">
  $('#upload_widget_opener').cloudinary_upload_widget({
    cloudName: 'dk4itfgu5', apiKey: '565124217557666',
    cropping: true, uploadSignature: generateSignature}, (error, result) => { });
</script>
