# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')

demo = User.create!(first_name: "Demo", last_name: "Demo", email: "demo@demo.com", password: "password123")
user1 = User.create!(first_name: "Derrick", last_name: "Toes", email: "dtoes88@abc.com", password: "password123", brief_bio: "I like to play basketball, but I love to hike.")
user2 = User.create!(first_name: "Ash", last_name: "Ketchup", email: "aketchup90@abc.com", password: "password123", brief_bio: "Gotta catch 'em all.")
user3 = User.create!(first_name: "Mike", last_name: "Bison", email: "mbison81@abc.com", password: "password123", brief_bio: "I'm looking for challenging hikes to build up my stamina.")
user4 = User.create!(first_name: "Hairy", last_name: "Potter", email: "hpotter89@abc.com", password: "password123", brief_bio: "Does anyone know where I can find the locket of Salazar Slytherin?")
user5 = User.create!(first_name: "Phyllis", last_name: "Dance", email: "pdance80@abc.com", password: "password123", brief_bio: "I like to go on hikes near Scranton, Pennsylvania.")