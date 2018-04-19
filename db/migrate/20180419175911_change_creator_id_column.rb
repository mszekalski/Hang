class ChangeCreatorIdColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :channels, :creator_id, :integer, using: 'creator_id::integer'
  end
end
