window.SIMPLECOV_DATA = {
  "$schema": "https://raw.githubusercontent.com/simplecov-ruby/simplecov/main/schemas/coverage-v1.0.schema.json",
  "meta": {
    "schema_version": "1.0",
    "simplecov_version": "1.0.3",
    "command_name": "RSpec",
    "project_name": "App",
    "timestamp": "2026-08-13T18:17:33.819+00:00",
    "root": "/app",
    "commit": "495a7c0362f9ce26890432b5c62b8aafc7b189b2",
    "primary_coverage": "line",
    "line_coverage": true,
    "branch_coverage": false,
    "method_coverage": false
  },
  "total": {
    "lines": {
      "covered": 21,
      "missed": 21,
      "omitted": 57,
      "total": 42,
      "percent": 50.0,
      "strength": 0.6904761904761905
    }
  },
  "coverage": {
    "app/components/public/navbar_component.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  class NavbarComponent < ViewComponent::Base",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        0,
        0,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 2,
      "omitted_lines": 4,
      "total_lines": 2
    },
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
        0,
        null,
        0,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 2,
      "omitted_lines": 4,
      "total_lines": 2
    },
    "app/controllers/public/about_controller.rb": {
      "source": [
        "class Public::AboutController < ApplicationController",
        "  def show",
        "  end",
        "end"
      ],
      "lines": [
        0,
        0,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 2,
      "omitted_lines": 2,
      "total_lines": 2
    },
    "app/controllers/public/contact_controller.rb": {
      "source": [
        "class Public::ContactController < ApplicationController",
        "  def show",
        "  end",
        "end"
      ],
      "lines": [
        0,
        0,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 2,
      "omitted_lines": 2,
      "total_lines": 2
    },
    "app/controllers/public/help_requests_controller.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  class HelpRequestsController < ApplicationController",
        "    def new; end",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        0,
        0,
        0,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 3,
      "omitted_lines": 4,
      "total_lines": 3
    },
    "app/controllers/public/home_controller.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  class HomeController < ApplicationController",
        "    def index; end",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        0,
        0,
        0,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 3,
      "omitted_lines": 4,
      "total_lines": 3
    },
    "app/controllers/public/how_it_works_controller.rb": {
      "source": [
        "class Public::HowItWorksController < ApplicationController",
        "  def show",
        "  end",
        "end"
      ],
      "lines": [
        0,
        0,
        null,
        null
      ],
      "lines_covered_percent": 0.0,
      "covered_lines": 0,
      "missed_lines": 2,
      "omitted_lines": 2,
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
    "app/helpers/public/about_helper.rb": {
      "source": [
        "module Public::AboutHelper",
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
    "app/helpers/public/contact_helper.rb": {
      "source": [
        "module Public::ContactHelper",
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
    "app/helpers/public/help_requests_helper.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  module HelpRequestsHelper",
        "    def help_request_page_title",
        "      'Preciso de Ajuda'",
        "    end",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        1,
        1,
        0,
        null,
        null,
        null
      ],
      "lines_covered_percent": 75.0,
      "covered_lines": 3,
      "missed_lines": 1,
      "omitted_lines": 5,
      "total_lines": 4
    },
    "app/helpers/public/home_helper.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  module HomeHelper",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 2,
      "missed_lines": 0,
      "omitted_lines": 4,
      "total_lines": 2
    },
    "app/helpers/public/how_it_works_helper.rb": {
      "source": [
        "module Public::HowItWorksHelper",
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
        1,
        1,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 2,
      "missed_lines": 0,
      "omitted_lines": 3,
      "total_lines": 2
    },
    "app/models/room.rb": {
      "source": [
        "class Room < ApplicationRecord",
        "  GOOGLE_MEET_URL = %r{\\Ahttps://meet\\.google\\.com/[a-z0-9-]+\\z}i",
        "",
        "  validates :name, presence: true",
        "  validates :meeting_url, presence: true",
        "  validate :meeting_url_must_be_google_meet",
        "",
        "  private",
        "",
        "  def meeting_url_must_be_google_meet",
        "    return if meeting_url.blank?",
        "    return if meeting_url.match?(GOOGLE_MEET_URL)",
        "",
        "    errors.add(:meeting_url, \"must be a Google Meet URL\")",
        "  end",
        "end"
      ],
      "lines": [
        1,
        1,
        null,
        1,
        1,
        1,
        null,
        1,
        null,
        1,
        6,
        4,
        null,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 10,
      "missed_lines": 0,
      "omitted_lines": 6,
      "total_lines": 10
    }
  },
  "groups": {
    "Controllers": {
      "lines": {
        "covered": 0,
        "missed": 14,
        "omitted": 18,
        "total": 14,
        "percent": 0.0,
        "strength": 0.0
      },
      "files": [
        "app/controllers/application_controller.rb",
        "app/controllers/public/about_controller.rb",
        "app/controllers/public/contact_controller.rb",
        "app/controllers/public/help_requests_controller.rb",
        "app/controllers/public/home_controller.rb",
        "app/controllers/public/how_it_works_controller.rb"
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
        "covered": 12,
        "missed": 0,
        "omitted": 9,
        "total": 12,
        "percent": 100.0,
        "strength": 1.6666666666666667
      },
      "files": [
        "app/models/application_record.rb",
        "app/models/room.rb"
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
        "covered": 9,
        "missed": 1,
        "omitted": 15,
        "total": 10,
        "percent": 90.0,
        "strength": 0.9
      },
      "files": [
        "app/helpers/application_helper.rb",
        "app/helpers/public/about_helper.rb",
        "app/helpers/public/contact_helper.rb",
        "app/helpers/public/help_requests_helper.rb",
        "app/helpers/public/home_helper.rb",
        "app/helpers/public/how_it_works_helper.rb"
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
    },
    "Ungrouped": {
      "lines": {
        "covered": 0,
        "missed": 2,
        "omitted": 4,
        "total": 2,
        "percent": 0.0,
        "strength": 0.0
      },
      "files": [
        "app/components/public/navbar_component.rb"
      ]
    }
  },
  "errors": {}
};
