<!-- mailchimp code -->
<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false">
</script>
<script type="text/javascript">
  function showMailingPopUp() {
    require(
      ["mojo/signup-forms/Loader"],
      function(L) {
        L.start({
          "baseUrl":"mc.us13.list-manage.com",
          "uuid":"00a89507614f5411798c66b51",
          "lid":"9bca42a71c"
      })
    });
    document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }
  // select all mailchimp trigger buttons
  var opts = document.querySelectorAll('.button__opt');
  if (opts != null) {
    opts.forEach((opt) => {
      opt.addEventListener('click', function() {
        console.log('mailchimp');
        showMailingPopUp();
      });
    });
  }
</script>
<!-- end mailchimp code -->
