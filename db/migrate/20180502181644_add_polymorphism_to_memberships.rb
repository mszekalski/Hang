class AddPolymorphismToMemberships < ActiveRecord::Migration[5.1]
  def change
    remove_column :memberships, :channel_id
    add_column :memberships, :mebershipable_id, :integer
    add_column :memberships, :membershipable_type, :string
  end
end
