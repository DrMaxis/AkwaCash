{{ html()->modelForm($logged_in_user, 'POST', route('frontend.user.profile.update'))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
    @method('PATCH')

    

    <div class="row">
        <div class="col">
            <div class="form-group">
                    {{ html()->label(__('validation.attributes.frontend.first_name'))->for('first_name')
                }} {{ html()->text('first_name') ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.first_name'))
                ->attribute('maxlength', 191) ->required()}}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->

    <div class="row">
        <div class="col">
            <div class="form-group">
                    {{ html()->label(__('validation.attributes.frontend.last_name'))->for('last_name') }} {{ html()->text('last_name')
                    ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.last_name'))
                    ->attribute('maxlength', 191) ->required() }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->
 
<!--col-->


    @if ($logged_in_user->canChangeEmail())
        <div class="row">
            <div class="col">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> @lang('strings.frontend.user.change_email_notice')
                </div>

                <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }} {{ html()->text('email')
                        ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.email'))
                        ->attribute('maxlength', 191) ->required() }}
                </div><!--form-group-->
            </div><!--col-->
        </div><!--row-->
    @endif

    {{-- @if ($logged_in_user->canChangePhone()) --}}
        <div class="row">
            <div class="col">
                

                <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.phone_number'))->for('phone_number') }}
                        {{ html()->text('phone_number') ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.phone_number'))
                        ->attribute('maxlength', 191) ->required() }}
                        <span id="valid-msg" class="hide">✓ Valid</span>
                        <span id="error-msg" class="hide"></span>
                </div><!--form-group-->
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> @lang('strings.frontend.user.change_phone_notice')
                </div>
            </div><!--col-->
        </div><!--row-->
  {{--   @endif --}}

    <div class="row">
        <div class="col">
            <div class="form-group mb-0 clearfix">
                {{ form_submit(__('labels.general.buttons.update_account').'<i class="material-icons">person</i>')->class('btn btn-outline-light btn-sm rounded d-inline-block')  }}
            </div><!--form-group-->
        </div><!--col-->
    </div><!--row-->
{{ html()->closeModelForm() }}

@push('after-scripts')
@include('frontend.includes.partials.scripts.login.phoneNumberInputValidation')

@endpush
