<div class="dropdown-menu" aria-labelledby="navbarDropdownLanguageLink">
    @foreach(array_keys(config('locale.languages')) as $lang)
        @if($lang != app()->getLocale())
        <div class="dropdown-item">
                <small><a href="{{ '/lang/'.$lang }}" class="avatar avatar-24 mr-2 vm d-inline-block">@lang('menus.language-picker.langs.'.$lang)</a></small>
            </div>

        @endif
    @endforeach
</div>
