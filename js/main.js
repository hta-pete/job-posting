// All form editors
var overview_editor    = document.getElementById('cg-editor-overview');
var description_editor = document.getElementById('cg-editor-description');
var experience_editor  = document.getElementById('cg-editor-experience');


// New module for converting pasted content to plain text
var Clipboard = Quill.import('modules/clipboard');
var Delta = Quill.import('delta');

class PlainClipboard extends Clipboard {
  convert(html = null) {
    if (typeof html === 'string') {
      this.container.innerHTML = html;
    }
    let text = this.container.innerText;
    this.container.innerHTML = '';
    return new Delta().insert(text);
  }
}
Quill.register('modules/clipboard', PlainClipboard, true);


// Register editors in job post form
var editor1 = new Quill(overview_editor, {
  modules: {
    toolbar: [
      [{ 'list': 'bullet' }],
      ['bold', 'italic'] 
    ]
  },
  clipboard: {
    matchVisual: false
  },
  placeholder: 'Enter a list of the top benefits.',
  theme: 'snow'
});

var editor2 = new Quill(description_editor, {
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic'] 
    ]
  },
  clipboard: {
    matchVisual: false
  },
  placeholder: 'Enter a few paragraphs describing the job.',
  theme: 'snow'
});

var editor3 = new Quill(experience_editor, {
  modules: {
    toolbar: [
      [{ 'list': 'bullet' }],
      ['bold', 'italic'] 
    ]
  },
  clipboard: {
    matchVisual: false
  },
  placeholder: 'Enter a list of required experience and qualifications.',
  theme: 'snow'
});


// Job preview
var job_title               = document.getElementById('job-title');
var job_phone               = document.getElementById('job-phone');
var job_location            = document.getElementById('job-location');
var job_overview            = overview_editor.querySelector('.ql-editor');
var job_description         = description_editor.querySelector('.ql-editor');
var job_experience          = experience_editor.querySelector('.ql-editor');

var job_preview             = document.getElementById('cg-post-job-preview');
var job_title_preview       = document.getElementById('job-title-preview');
var job_phone_preview       = document.querySelectorAll('.job-phone-preview');
var job_location_preview    = document.getElementById('job-location-preview');
var job_overview_preview    = document.getElementById('job-overview-preview');
var job_description_preview = document.getElementById('job-description-preview');
var job_experience_preview  = document.getElementById('job-experience-preview');
var preview_btn             = document.getElementById('preview-btn');
var close_btn               = job_preview.querySelector('.close-btn');

var job_overview_section    = document.getElementById('job-overview-section');
var job_description_section = document.getElementById('job-description-section');
var job_experience_section  = document.getElementById('job-experience-section');

preview_btn.addEventListener('click', function(event) {

    job_title_preview.innerHTML       = job_title.value;

    for (var i = 0; i < job_phone_preview.length; i++) {

      job_phone_preview[i].innerHTML  = '<p>Speak to a Recruiter!</p>' + 'Call Now ' + '<strong>' + job_phone.value + '</strong>';

    }

    job_location_preview.innerHTML    = '<i class="fa fa-map-marker"></i>' + job_location.value;
    job_overview_preview.innerHTML    = job_overview.innerHTML;
    job_description_preview.innerHTML = job_description.innerHTML;
    job_experience_preview.innerHTML  = job_experience.innerHTML;

    job_preview.style.display = 'block';
  
});

close_btn.addEventListener('click', function(event) {

    job_preview.style.display = 'none';
  
});











    
		
	


