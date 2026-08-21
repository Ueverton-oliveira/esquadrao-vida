window.SIMPLECOV_DATA = {
  "$schema": "https://raw.githubusercontent.com/simplecov-ruby/simplecov/main/schemas/coverage-v1.0.schema.json",
  "meta": {
    "schema_version": "1.0",
    "simplecov_version": "1.0.3",
    "command_name": "RSpec",
    "project_name": "App",
    "timestamp": "2026-08-21T23:13:36.920+00:00",
    "root": "/app",
    "commit": "ee4da6e183ee25619318fbaf2781db3dc1ac0618",
    "primary_coverage": "line",
    "line_coverage": true,
    "branch_coverage": false,
    "method_coverage": false
  },
  "total": {
    "lines": {
      "covered": 77,
      "missed": 0,
      "omitted": 105,
      "total": 77,
      "percent": 100.0,
      "strength": 1.896103896103896
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
    "app/controllers/admin/dashboard_controller.rb": {
      "source": [
        "module Admin",
        "  class DashboardController < AdminController",
        "    def show",
        "      @rooms_count = Room.count",
        "      @active_rooms_count = Room.where(active: true).count",
        "      @inactive_rooms_count = Room.where(active: false).count",
        "    end",
        "  end",
        "end"
      ],
      "lines": [
        1,
        1,
        1,
        5,
        5,
        5,
        null,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 6,
      "missed_lines": 0,
      "omitted_lines": 3,
      "total_lines": 6
    },
    "app/controllers/admin/rooms_controller.rb": {
      "source": [
        "module Admin",
        "  class RoomsController < AdminController",
        "    def index",
        "      @rooms = Room.order(created_at: :desc)",
        "    end",
        "",
        "    def new",
        "      @room = Room.new",
        "    end",
        "",
        "    def create",
        "      @room = Room.new(room_params)",
        "",
        "      if @room.save",
        "        redirect_to admin_rooms_path,",
        "                    notice: \"Sala criada com sucesso.\"",
        "      else",
        "        render :new, status: :unprocessable_entity",
        "      end",
        "    end",
        "",
        "    def edit",
        "    end",
        "",
        "    def update",
        "    end",
        "",
        "    def destroy",
        "    end",
        "",
        "    private",
        "",
        "    def room_params",
        "      params.require(:room)",
        "            .permit(:name, :meeting_url)",
        "    end",
        "  end",
        "end"
      ],
      "lines": [
        1,
        1,
        1,
        3,
        null,
        null,
        1,
        2,
        null,
        null,
        1,
        6,
        null,
        6,
        2,
        null,
        null,
        4,
        null,
        null,
        null,
        1,
        null,
        null,
        1,
        null,
        null,
        1,
        null,
        null,
        1,
        null,
        1,
        6,
        null,
        null,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 17,
      "missed_lines": 0,
      "omitted_lines": 21,
      "total_lines": 17
    },
    "app/controllers/admin_controller.rb": {
      "source": [
        "class AdminController < ApplicationController",
        "  before_action :authenticate_admin_user!",
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
    "app/controllers/public/about_controller.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  class AboutController < ApplicationController",
        "    def show; end",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        1,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 3,
      "missed_lines": 0,
      "omitted_lines": 4,
      "total_lines": 3
    },
    "app/controllers/public/contact_controller.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  class ContactController < ApplicationController",
        "    def show; end",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        1,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 3,
      "missed_lines": 0,
      "omitted_lines": 4,
      "total_lines": 3
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
        1,
        1,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 3,
      "missed_lines": 0,
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
        1,
        1,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 3,
      "missed_lines": 0,
      "omitted_lines": 4,
      "total_lines": 3
    },
    "app/controllers/public/how_it_works_controller.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  class HowItWorksController < ApplicationController",
        "    def show; end",
        "  end",
        "end"
      ],
      "lines": [
        null,
        null,
        1,
        1,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 3,
      "missed_lines": 0,
      "omitted_lines": 4,
      "total_lines": 3
    },
    "app/helpers/admin/dashboard_helper.rb": {
      "source": [
        "module Admin::DashboardHelper",
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
    "app/helpers/admin/rooms_helper.rb": {
      "source": [
        "module Admin::RoomsHelper",
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
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  module AboutHelper",
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
    "app/helpers/public/contact_helper.rb": {
      "source": [
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  module ContactHelper",
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
        6,
        null,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 4,
      "missed_lines": 0,
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
        "# frozen_string_literal: true",
        "",
        "module Public",
        "  module HowItWorksHelper",
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
        1,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 1,
      "missed_lines": 0,
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
        1,
        1,
        1,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 3,
      "missed_lines": 0,
      "omitted_lines": 3,
      "total_lines": 3
    },
    "app/models/admin_user.rb": {
      "source": [
        "class AdminUser < ApplicationRecord",
        "  # Include default devise modules. Others available are:",
        "  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable",
        "  devise :database_authenticatable, :registerable,",
        "         :recoverable, :rememberable, :validatable",
        "end"
      ],
      "lines": [
        1,
        null,
        null,
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
        "# frozen_string_literal: true",
        "",
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
        null,
        null,
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
        19,
        13,
        null,
        1,
        null,
        null
      ],
      "lines_covered_percent": 100.0,
      "covered_lines": 10,
      "missed_lines": 0,
      "omitted_lines": 8,
      "total_lines": 10
    }
  },
  "groups": {
    "Controllers": {
      "lines": {
        "covered": 42,
        "missed": 0,
        "omitted": 49,
        "total": 42,
        "percent": 100.0,
        "strength": 1.8095238095238095
      },
      "files": [
        "app/controllers/admin/dashboard_controller.rb",
        "app/controllers/admin/rooms_controller.rb",
        "app/controllers/admin_controller.rb",
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
        "covered": 14,
        "missed": 0,
        "omitted": 15,
        "total": 14,
        "percent": 100.0,
        "strength": 3.142857142857143
      },
      "files": [
        "app/models/admin_user.rb",
        "app/models/application_record.rb",
        "app/models/room.rb"
      ]
    },
    "Mailers": {
      "lines": {
        "covered": 3,
        "missed": 0,
        "omitted": 3,
        "total": 3,
        "percent": 100.0,
        "strength": 1.0
      },
      "files": [
        "app/mailers/application_mailer.rb"
      ]
    },
    "Helpers": {
      "lines": {
        "covered": 15,
        "missed": 0,
        "omitted": 26,
        "total": 15,
        "percent": 100.0,
        "strength": 1.3333333333333333
      },
      "files": [
        "app/helpers/admin/dashboard_helper.rb",
        "app/helpers/admin/rooms_helper.rb",
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
        "covered": 1,
        "missed": 0,
        "omitted": 8,
        "total": 1,
        "percent": 100.0,
        "strength": 1.0
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
        "covered": 2,
        "missed": 0,
        "omitted": 4,
        "total": 2,
        "percent": 100.0,
        "strength": 1.0
      },
      "files": [
        "app/components/public/navbar_component.rb"
      ]
    }
  },
  "errors": {}
};
