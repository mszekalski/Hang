# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
ChatMessage.destroy_all
DirectThread.destroy_all

u1 = User.create(username: "demo-user", password: "password")
u2 = User.create(username: "demo-user2", password: "password")
u3 = User.create(username: "demo-user3", password: "password")

c1 = Channel.create(topic: "general", creator_id: u1.id, private: false, purpose: "This channel is for team-wide communication and announcements. All team members are in this channel.")

m1 = ChatMessage.create(content: "can someone help me out with a bug?", user_id: u1.id, chatable_id: c1.id, chatable_type: "Channel")
m1 = ChatMessage.create(content: "I can!!", user_id: u2.id, chatable_id: c1.id, chatable_type: "Channel")
m1 = ChatMessage.create(content: "I can too!! DM me if you need help", user_id: u3.id, chatable_id: c1.id, chatable_type: "Channel")

membership1 = Membership.create(user_id: u1.id, membershipable_id: c1.id, membershipable_type: "Channel")
membership1 = Membership.create(user_id: u2.id, membershipable_id: c1.id, membershipable_type: "Channel")
membership1 = Membership.create(user_id: u3.id, membershipable_id: c1.id, membershipable_type: "Channel")
