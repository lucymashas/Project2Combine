
   	   $(document).ready(function() {

             $("body").on("click","img", function() {
                 displayType = $(this).attr("searchType");
				menu =$('input#menutype').val()
				window.location.replace('/detail/'+menu+'/'+displayType)

			})
        })