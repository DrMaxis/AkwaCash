{{ html()->form('PATCH', route('frontend.auth.password.update'))->class('form-horizontal')->open() }}
    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.frontend.old_password'))->for('old_password') }}

                {{ html()->password('old_password')
                     ->class('form-control form-control-lg border-0')
                    ->placeholder(__('validation.attributes.frontend.old_password'))
                    ->autofocus()
                    ->required() }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.frontend.password'))->for('password') }}

                {{ html()->password('password')
                    ->class('form-control form-control-lg border-0')
                    ->placeholder(__('validation.attributes.frontend.password'))
                    ->required() }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group">
                {{ html()->label(__('validation.attributes.frontend.password_confirmation'))->for('password_confirmation') }}

                {{ html()->password('password_confirmation')
                    ->class('form-control form-control-lg border-0')
                    ->placeholder(__('validation.attributes.frontend.password_confirmation'))
                    ->required() }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group mb-0 clearfix">
                    {{ form_submit(__('labels.general.buttons.update_password').'<i class="material-icons">person</i>')->class('btn btn-outline-light btn-sm rounded d-inline-block')  }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->
{{ html()->form()->close() }}
