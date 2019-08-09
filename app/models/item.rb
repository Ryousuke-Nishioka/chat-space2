class Item < ApplicationRecord
  mount_uploader :picture, PictureUploader
  validates :picture, presence: true
end
