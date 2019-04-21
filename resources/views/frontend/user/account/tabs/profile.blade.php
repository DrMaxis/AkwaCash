
{{ html()->modelForm($logged_in_user, 'POST', route('frontend.user.profile.update'))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
    @method('PATCH')


    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.frontend.username'))->for('username') }}

                {{ html()->text('username')
                     ->class('form-control form-control-lg border-0')
                    ->placeholder(__('validation.attributes.frontend.username'))
                    ->attribute('maxlength', 191)
                    ->required()
                    ->autofocus() }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.frontend.status'))->for('status') }}

                {{ html()->text('status')
                    ->class('form-control form-control-lg border-0')
                    ->placeholder(__('validation.attributes.frontend.status'))
                    ->attribute('maxlength', 191)
                     }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group mb-0 clearfix">
                    {{ form_submit(__('labels.general.buttons.update').'<i class="material-icons">edit</i>')->class('btn btn-outline-light btn-sm rounded d-inline-block') }}
               
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->
{{ html()->closeModelForm() }}

@push('after-scripts')
  
@endpush
