// Class definition
var KTSelect2 = function () {
    // Private functions
    var demos = function () {

        // Users
        $('#ContentPlaceHolder1_ddlsection, #ContentPlaceHolder1_ddljob_validate').select2({
            placeholder: "select item"
        });
        // Users
        $('#ContentPlaceHolder1_ddlStage, #ContentPlaceHolder1_ddlStage_validate').select2({
            placeholder: "select item"
        });


        //===================================
        $('#ContentPlaceHolder1_ddljob, #ContentPlaceHolder1_ddljob_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_drp_employee, #ContentPlaceHolder1_drp_employee_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlbank, #ContentPlaceHolder1_ddlbank_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddl, #ContentPlaceHolder1_ddlbank_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddl1, #ContentPlaceHolder1_ddlbank_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlprogram, #ContentPlaceHolder1_ddlprogram_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlaccounts, #ContentPlaceHolder1_ddlaccounts_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlgov, #ContentPlaceHolder1_ddlgov_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlgove, #ContentPlaceHolder1_ddlgove_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlcomitte, #ContentPlaceHolder1_ddlcomitte_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlemp, #ContentPlaceHolder1_ddlemp_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlcentrt, #ContentPlaceHolder1_ddlcentrt_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlcent, #ContentPlaceHolder1_ddlcent_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlsec, #ContentPlaceHolder1_ddlsec_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlmainlookups, #ContentPlaceHolder1_ddlmainlookups_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlcent, #ContentPlaceHolder1_ddlcent_validate').select2({
            placeholder: "select item"
        });
        $('#ContentPlaceHolder1_ddlarea, #ContentPlaceHolder1_ddlarea_validate').select2({
            placeholder: "select item"
        });

        $('#ContentPlaceHolder1_ddltype, #ContentPlaceHolder1_ddltype_validate').select2({
            placeholder: "select item"
        });
        // nested
        $('#kt_select2_2, #kt_select2_2_validate').select2({
            placeholder: "Select a state"
        });

        // multi select
        $('#ContentPlaceHolder1_listBox_roles, #ContentPlaceHolder1_listBox_roles_validate').select2({
            placeholder: "select item",
        });
        $('#ContentPlaceHolder1_listBox_devices, #ContentPlaceHolder1_listBox_devices_validate').select2({
            placeholder: "select item",
        });

        // basic
        $('#kt_select2_4').select2({
            placeholder: "Select a state",
            allowClear: true
        });

        // loading data from array
        var data = [{
            id: 0,
            text: 'Enhancement'
        }, {
            id: 1,
            text: 'Bug'
        }, {
            id: 2,
            text: 'Duplicate'
        }, {
            id: 3,
            text: 'Invalid'
        }, {
            id: 4,
            text: 'Wontfix'
        }];

        $('#kt_select2_5').select2({
            placeholder: "Select a value",
            data: data
        });

        // loading remote data

        function formatRepo(repo) {
            if (repo.loading) return repo.text;
            var markup = "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
            if (repo.description) {
                markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
            }
            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
                "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
                "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
                "</div>" +
                "</div></div>";
            return markup;
        }

        function formatRepoSelection(repo) {
            return repo.full_name || repo.text;
        }

        $("#kt_select2_6").select2({
            placeholder: "Search for git repositories",
            allowClear: true,
            ajax: {
                url: "https://api.github.com/search/repositories",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function (data, params) {
                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;

                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatRepo, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        });

        // custom styles

        // tagging support
        $('#kt_select2_12_1, #kt_select2_12_2, #kt_select2_12_3, #kt_select2_12_4').select2({
            placeholder: "Select an option",
        });

        // disabled mode
        $('#kt_select2_7').select2({
            placeholder: "Select an option"
        });

        // disabled results
        $('#kt_select2_8').select2({
            placeholder: "Select an option"
        });

        // limiting the number of selections
        $('#kt_select2_9').select2({
            placeholder: "Select an option",
            maximumSelectionLength: 2
        });

        // hiding the search box
        $('#kt_select2_10').select2({
            placeholder: "Select an option",
            minimumResultsForSearch: Infinity
        });

        // tagging support
        $('#kt_select2_11').select2({
            placeholder: "Add a tag",
            tags: true
        });

        // disabled results
        $('.kt-select2-general').select2({
            placeholder: "Select an option"
        });
    }

    var modalDemos = function () {
        $('#kt_select2_modal').on('shown.bs.modal', function () {

            //Users
            $('#ContentPlaceHolder1_ddlsection_modal').select2({
                placeholder: "select item"
            });
            $('#ContentPlaceHolder1_ddljob_modal').select2({
                placeholder: "select item"
            });
            $('#ContentPlaceHolder1_drp_employee_modal').select2({
                placeholder: "select item"
            });

            // nested
            $('#kt_select2_2_modal').select2({
                placeholder: "Select a state"
            });

            // multi select
            $('#ContentPlaceHolder1_listBox_roles_modal').select2({
                placeholder: "select item",
            });
            $('#ContentPlaceHolder1_listBox_devices_modal').select2({
                placeholder: "select item",
            });
            // basic
            $('#kt_select2_4_modal').select2({
                placeholder: "Select a state",
                allowClear: true
            });
        });
    }

    // Public functions
    return {
        init: function () {
            demos();
            modalDemos();
        }
    };
}();

// Initialization
jQuery(document).ready(function () {
    KTSelect2.init();
});