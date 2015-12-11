var auth = {
    
    CLIENT_ID: "551653508701-t276t740tt67796la21ppsqhirjiid4d.apps.googleusercontent.com",
    SCOPES:['https://mail.google.com/'],
    
    checkAuth:function() {
    gapi.auth.auth(
      {
        'client_id':auth.CLIENT_ID,
        'scope': auth.SCOPES.join(' '),
        'immediate': true
      }, auth.handleAuthResult);
  },

 
  handleAuthResult:function(authResult) {
    var authDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error)
    {
      
      authDiv.style.display = 'none';
      gMail.loadGmailApi();
      gMail.getLabels();
      
    } 
    else 
    {
      
      authDiv.style.display = 'inline';
    }
  },

  handleAuthLogin:function(event) {
    gapi.auth.authorize(
      {client_id: auth.CLIENT_ID, scope: auth.SCOPES, immediate: false, authuser:""},
      auth.handleAuthResult);
    return false;
  }


}


console.log("auth")