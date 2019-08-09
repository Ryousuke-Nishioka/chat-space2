FactoryBot.define do
  factory :item do
    content { '紹介文' }
    picture { Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/test.jpg')) }
    tag_list {'テスト'}
    user
  end
end

