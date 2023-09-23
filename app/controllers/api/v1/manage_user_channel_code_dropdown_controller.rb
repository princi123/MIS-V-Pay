class Api::V1::ManageUserChannelCodeDropdownController < ApplicationController
   def index
    valid_upto=params[:valid_upto]
    dropdown_details = ManageUserChannelCodeDropdownService.get_dropdown_details(valid_upto)
    render json: dropdown_details
   end
end
