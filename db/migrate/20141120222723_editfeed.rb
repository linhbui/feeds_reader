class Editfeed < ActiveRecord::Migration
  def change
    change_column :feeds, :url, :text
  end
end
