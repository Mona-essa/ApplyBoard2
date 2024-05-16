let togglebtn = document.querySelector("button");
let toggleBarsBtn = document.querySelector(".bars-btn");
let collapseMenu = document.querySelector(".collapse-menu");
let collapseMenuList= document.querySelectorAll('.collapse-menu-list li');
let toggleMenu = document.getElementById('toggle-menu');

//--------------------------------------------------
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbars')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}  
//----------------------------------------------------------
function checkboxStatusChange() {
    var multiselect = document.getElementById("locationSelect");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];
    var filterSecAll = document.getElementById("filterSecAll");
  
    var values = [];
    var checkboxes = document.getElementById("mySelectLocation");
    var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');
  
    for (const item of checkedCheckboxes) {
      var checkboxValue = item.getAttribute('value');
      values.push(checkboxValue);
    }
  
    var dropdownValue = "Nothing is selected";
    if (values.length > 0) {
      dropdownValue = values.join(', ');
    }
  
   // multiselectOption.innerText = dropdownValue;
   filterSecAll.innerText = dropdownValue;
  }

  //------------------------------------------------------
  function toggleCheckboxArea(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectLocation");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }
//---------------------------------------------------

  function toggleCheckboxAreaProgram(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectProgram");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

  //-------------------------------------------------

  function toggleCheckboxAreaDiscipline(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectDiscipline");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

  //-----------------------------------------------------------------

  function toggleCheckboxAreaTuition(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectTuition");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

  //------------------------------------------------------
  function toggleCheckboxAreaIntakes(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectIntakes");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

  //----------------------------------------------------------

function toggleCheckboxAreaDuration(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectDuration");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }
  //---------------------------------------------------------

  function moreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

  //----------------------------------------------------------

  (function($) {
    var CheckboxDropdown = function(el) {
      var _this = this;
      this.isOpen = false;
      this.areAllChecked = false;
      this.$el = $(el);
      this.$label = this.$el.find('.dropdown-label');
      this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
      this.$inputs = this.$el.find('[type="checkbox"]');
      
      this.onCheckBox();
      
      this.$label.on('click', function(e) {
        e.preventDefault();
        _this.toggleOpen();
      });
      
      this.$checkAll.on('click', function(e) {
        e.preventDefault();
        _this.onCheckAll();
      });
      
      this.$inputs.on('change', function(e) {
        _this.onCheckBox();
      });
    };
    
    CheckboxDropdown.prototype.onCheckBox = function() {
      this.updateStatus();
    };
    
    CheckboxDropdown.prototype.updateStatus = function() {
      var checked = this.$el.find(':checked');
      
      this.areAllChecked = false;
      this.$checkAll.html('Check All');
      
      if(checked.length <= 0) {
        this.$label.html('Location');
      }
      else if(checked.length === 1) {
        this.$label.html(checked.parent('label').text());
      }
      else if(checked.length === this.$inputs.length) {
        this.$label.html('All Selected');
        this.areAllChecked = true;
        this.$checkAll.html('Uncheck All');
      }
      else {
        this.$label.html(checked.length + ' Selected');
      }
    };
    
    CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
      if(!this.areAllChecked || checkAll) {
        this.areAllChecked = true;
        this.$checkAll.html('Uncheck All');
        this.$inputs.prop('checked', true);
      }
      else {
        this.areAllChecked = false;
        this.$checkAll.html('Check All');
        this.$inputs.prop('checked', false);
      }
      
      this.updateStatus();
    };
    
    CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
      var _this = this;
      
      if(!this.isOpen || forceOpen) {
         this.isOpen = true;
         this.$el.addClass('on');
        $(document).on('click', function(e) {
          if(!$(e.target).closest('[data-control]').length) {
           _this.toggleOpen();
          }
        });
      }
      else {
        this.isOpen = false;
        this.$el.removeClass('on');
        $(document).off('click');
      }
    };
    
    var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
    for(var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
      new CheckboxDropdown(checkboxesDropdowns[i]);
    }
  })(jQuery);


  //---------------------------------------------------------------
 
  function toggleSubCheckbox(onlyHide = false) {
    var subDropDownList = document.getElementById("subDropDownList");
    var checBoxLabel = document.getElementById("checkBoxLabel");
    var displayValue = subDropDownList.style.display;
  
    if (displayValue != "flex") {
      if (onlyHide == false) {
        checkboxes.style.display = "flex";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

  //---------------------------------------

  

  