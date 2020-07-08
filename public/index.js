function index_defaults()
  {
    document.getElementById("login_area").style.display= 'block';
    document.getElementById("reset_area").style.display= 'none';
  }
  function p_reset()
  {
    document.getElementById("login_area").style.display= 'none';
    document.getElementById("reset_area").style.display= 'block';
  }

  function after_p_reset()
  {
    //code for reset here
    
    alert("Please check your Email, for pass Reset info.");
    document.getElementById("login_area").style.display= 'block';
    document.getElementById("reset_area").style.display= 'none';
  }

function authenticate()
  {
    //authenticate here
    loadLauncher();
  }

  
function loadLauncher()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'launcher.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('body1').innerHTML = this.responseText;
      }
    }
    xhrLauncher.send();
  }

  function loadRegistry()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'registry.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('launcher_interchange_section').innerHTML = this.responseText;
        //hide other sections until triggered
      }
    }
    xhrLauncher.send();
  }

  function loadAcademia()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'academics.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('launcher_interchange_section').innerHTML = this.responseText;
      }
    }
    xhrLauncher.send();
  }

  function loadAnnouncements()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'announcements.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('launcher_interchange_section').innerHTML = this.responseText;
      }
    }
    xhrLauncher.send();
  }

  function loadHealth()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'health.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('launcher_interchange_section').innerHTML = this.responseText;
      }
    }
    xhrLauncher.send();
  }

  function loadFees()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'fees.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('launcher_interchange_section').innerHTML = this.responseText;
      }
    }
    xhrLauncher.send();
  }

  function loadDiscipline()
  {
    //check auth first,then load launcher if allowed
    var xhrLauncher = new XMLHttpRequest
    xhrLauncher.open("GET",'discipline.html',true);
    xhrLauncher.onload = function()
    {
      if(this.status ==200)
      {
        document.getElementById('launcher_interchange_section').innerHTML = this.responseText;
      }
    }
    xhrLauncher.send();
  }