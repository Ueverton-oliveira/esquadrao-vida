# frozen_string_literal: true

class AddDefaultToRoomsActive < ActiveRecord::Migration[8.0]
  def change
    change_column_default :rooms, :active, from: nil, to: true
    change_column_null :rooms, :active, false, true
  end
end
