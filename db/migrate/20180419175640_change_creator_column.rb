class ChangeCreatorColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :channels, :creator, :creator_id
  end
end
