<?php
function cv_static_get_current_year()
{
    return date('Y');
}
function cv_static_get_current_month()
{
    return date('m');
}

function age_calculation($birth_date)
{
    $birth_date = new DateTime($birth_date);
    $current_date = new DateTime();
    $age = $birth_date->diff($current_date);
    return "(" . $age->y . " Years Old)";
}

function date_difference($date1, $date2 = "now")
{
    if (is_numeric($date1) && strlen((string) $date1) == 4) {
        $date1 = $date1 . '-01-01';
    }
    if (is_numeric($date2) && strlen((string) $date2) == 4) {
        $date2 = $date2 . '-01-01';
    }

    $date1 = new DateTime($date1);
    $date2 = new DateTime($date2);
    $diff = $date1->diff($date2);

    return $diff->y;
}