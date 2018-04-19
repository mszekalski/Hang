class AddPropertiesToChannels < ActiveRecord::Migration[5.1]
  def change
    add_column :channels, :creator, :string
    add_column :channels, :purpose, :string
    add_column :channels, :private, :boolean
  end
end
