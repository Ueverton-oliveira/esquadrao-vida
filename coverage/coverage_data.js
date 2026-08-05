window.SIMPLECOV_DATA = {
  "$schema": "https://raw.githubusercontent.com/simplecov-ruby/simplecov/main/schemas/coverage-v1.0.schema.json",
  "meta": {
    "schema_version": "1.0",
    "simplecov_version": "1.0.3",
    "command_name": "RSpec",
    "project_name": "App",
    "timestamp": "2026-08-05T19:03:39.746+00:00",
    "root": "/app",
    "commit": "6c71367c247d373caa1d87fe1a984ed62398a637",
    "primary_coverage": "line",
    "line_coverage": true,
    "branch_coverage": false,
    "method_coverage": false
  },
  "total": {
    "lines": {
      "covered": 6,
      "missed": 6,
      "omitted": 23,
      "total": 12,
      "percent": 50.0,
      "strength": 0.5
    }
  },
  "coverage": {
    "app/controllers/application_controller.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "class ApplicationController < ActionController::Base",
        "  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.",
        "  allow_browser versions: :modern",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        null,
        1,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 2,
      "missed_lines": 0,
      "omitted_lines": 4,
      "total_lines": 2
    },
    "app/controllers/public/home_controller.rb": {
      "source": [
        "class Public::HomeController < ApplicationController",
        "  def index; end",
        "end"
      ],
      "lines": [
        1,
        1,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 2,
      "missed_lines": 0,
      "omitted_lines": 1,
      "total_lines": 2
    },
    "app/helpers/application_helper.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module ApplicationHelper",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 1,
      "missed_lines": 0,
      "omitted_lines": 3,
      "total_lines": 1
    },
    "app/helpers/public/home_helper.rb": {
      "source": [
        "module Public::HomeHelper",
        "end"
      ],
      "lines": [
        1,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 1,
      "missed_lines": 0,
      "omitted_lines": 1,
      "total_lines": 1
    },
    "app/jobs/application_job.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "class ApplicationJob < ActiveJob::Base",
        "  # Automatically retry jobs that encountered a deadlock",
        "  # retry_on ActiveRecord::Deadlocked",
        "",
        "  # Most jobs are safe to ignore if the underlying records are no longer available",
        "  # discard_on ActiveJob::DeserializationError",
        "end"
      ],
      "lines": [
        null,
        null,
        0,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 1,
      "omitted_lines": 8,
      "total_lines": 1
    },
    "app/mailers/application_mailer.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "class ApplicationMailer < ActionMailer::Base",
        "  default from: 'from@example.com'",
        "  layout 'mailer'",
        "end"
      ],
      "lines": [
        null,
        null,
        0,
        0,
        0,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 3,
      "omitted_lines": 3,
      "total_lines": 3
    },
    "app/models/application_record.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "class ApplicationRecord < ActiveRecord::Base",
        "  primary_abstract_class",
        "end"
      ],
      "lines": [
        null,
        null,
        0,
        0,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 2,
      "omitted_lines": 3,
      "total_lines": 2
    }
  },
  "groups": {
    "Controllers": {
      "lines": {
        "covered": 4,
        "missed": 0,
        "omitted": 5,
        "total": 4,
        "percent": 100.0,
        "strength": 1.0
      },
      "files": [
        "app/controllers/application_controller.rb",
        "app/controllers/public/home_controller.rb"
      ]
    },
    "Channels": {
      "lines": {
        "covered": 0,
        "missed": 0,
        "omitted": 0,
        "total": 0,
        "percent": 100.0,
        "strength": 0.0
      },
      "files": []
    },
    "Models": {
      "lines": {
        "covered": 0,
        "missed": 2,
        "omitted": 3,
        "total": 2,
        "percent": 0.0,
        "strength": 0.0
      },
      "files": [
        "app/models/application_record.rb"
      ]
    },
    "Mailers": {
      "lines": {
        "covered": 0,
        "missed": 3,
        "omitted": 3,
        "total": 3,
        "percent": 0.0,
        "strength": 0.0
      },
      "files": [
        "app/mailers/application_mailer.rb"
      ]
    },
    "Helpers": {
      "lines": {
        "covered": 2,
        "missed": 0,
        "omitted": 4,
        "total": 2,
        "percent": 100.0,
        "strength": 1.0
      },
      "files": [
        "app/helpers/application_helper.rb",
        "app/helpers/public/home_helper.rb"
      ]
    },
    "Jobs": {
      "lines": {
        "covered": 0,
        "missed": 1,
        "omitted": 8,
        "total": 1,
        "percent": 0.0,
        "strength": 0.0
      },
      "files": [
        "app/jobs/application_job.rb"
      ]
    },
    "Libraries": {
      "lines": {
        "covered": 0,
        "missed": 0,
        "omitted": 0,
        "total": 0,
        "percent": 100.0,
        "strength": 0.0
      },
      "files": []
    }
  },
  "errors": {}
};
