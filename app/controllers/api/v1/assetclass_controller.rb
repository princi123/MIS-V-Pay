class Api::V1::AssetclassController < ApplicationController
    def index
        asset_class = params[:asset_class]
        assetclass_dropdown = AssetClassDropdownService.get_assetclass_details(asset_class)
        render json: assetclass_dropdown
    end
end
